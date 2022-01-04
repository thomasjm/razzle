import type { RuleSetRule } from "webpack";
import { types as Razzle } from "razzle";
import { types as WP5 } from "razzle-plugin-webpack5";
import { type } from "os";

export type Options = {};

export type Context = {};

export type PluginOptions = {
  assetResourceExclude: Exclude<RuleSetRule["exclude"], undefined>;
  assetAutoTest: Exclude<RuleSetRule["test"], undefined>;
  assetAutoSize: number;
}

export type Paths = {
  staticPath: string;
};

export type DefinePluginDefines = {};


export type Plugin = WP5.PluginInt<
  PluginOptions,
  Context & WP5.Context & Razzle.Context & Razzle.PathsContext<Paths & WP5.Paths & Razzle.Paths>,
  Options &
    WP5.Options &
    WP5.DefineOptions<DefinePluginDefines & WP5.DefinePluginDefines>
>;
