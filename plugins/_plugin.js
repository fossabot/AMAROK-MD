const { command, getUrl } = require("../lib");
const got = require("got");
const fs = require("fs");
const { PluginDB, installPlugin } = require("../lib/database/plugins");



command(
  {
    pattern: "install",
    fromMe: true,
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("Example:\n\nplugin url\n∴════∴\nplugin list");

    try {
      var url = new URL(match);
    } catch (e) {
      console.log(e);
      return await message.sendMessage("_Ready"_);
    }

    if (url.host === "gist.github.com") {
      url.host = "gist.githubusercontent.com";
      url = url.toString() + "/raw";
    } else {
      url = url.toString();
    }
    var plugin_name;
    var { body, statusCode } = await got(url);
    if (statusCode == 200) {
      var comand = body.match(/(?<=pattern:) ["'](.*?)["']/);
      plugin_name = comand[0].replace(/["']/g, "").trim().split(" ")[0];
      if (!plugin_name) {
        plugin_name = "__" + Math.random().toString(36).substring(8);
      }
      fs.writeFileSync(__dirname + "/" + plugin_name + ".js", body);
      try {
        require("./" + plugin_name);
      } catch (e) {
        fs.unlinkSync(__dirname + "/" + plugin_name + ".js");
        return await message.sendMessage("Invalid Plugin\n ```" + e + "```");
      }

      await installPlugin(url, plugin_name);

      await message.sendMessage(`_New plugin installed : ${plugin_name}_`);
    }
  }
);



command(
  { pattern: "plugin", fromMe: true, type: "user" },
  async (message, match) => {
    var mesaj = "";
    var plugins = await PluginDB.findAll();
    if (plugins.length < 1) {
      return await message.sendMessage("Plugin not installed");
    } else {
      plugins.map((plugin) => {
        mesaj +=
          "```" +
          plugin.dataValues.name +
          "```: " +
          plugin.dataValues.url +
          "\n";
      });
      return await message.sendMessage(mesaj);
    }
  }
);



command(
  {
    pattern: "remove(?: |$)(.*)",
    fromMe: true,
    type: "user",
  },
  async (message, match) => {
    if (!match) return await message.sendMessage("_Need a plugin name_");

    var plugin = await PluginDB.findAll({ where: { name: match } });

    if (plugin.length < 1) {
      return await message.sendMessage("_Plugin not found_");
    } else {
      await plugin[0].destroy();
      delete require.cache[require.resolve("./" + match + ".js")];
      fs.unlinkSync(__dirname + "/" + match + ".js");
      await message.sendMessage(`Plugin ${match} deleted`);
    }
  }
);
