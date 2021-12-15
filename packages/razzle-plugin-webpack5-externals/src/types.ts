import {
  ConfigInt as WP5ConfigInt,
  ContextInt as WP5ContextInt,
  DefinePluginDefines as WP5DefinePluginDefines,
  OptionsInt as WP5OptionsInt,
  PathNames as WP5PathNames,
  PluginInt as WP5PluginInt,
} from "razzle-plugin-webpack5";

export interface ContextInt<Pths extends string> extends WP5ContextInt<Pths> {}

export interface OptionsInt<Defs extends string> extends WP5OptionsInt<Defs> {}

export interface PluginOptions {
  esmExternals: boolean | "loose";
  notCallback?: (request: string, context: string) => boolean;
}

export type PathNames = WP5PathNames;

export type Context = ContextInt<PathNames>;

export type DefinePluginDefines = WP5DefinePluginDefines;

export type Options = OptionsInt<DefinePluginDefines>;

export type Config = WP5ConfigInt<Context, Options>;

export type Plugin = WP5PluginInt<PluginOptions, Config, Context, Options>;
