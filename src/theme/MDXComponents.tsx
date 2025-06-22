import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import {
  Video,
  LoopingVideo,
  FloatingVideo,
  InlineVideo,
  InlineFloatingVideo,
  EmilyH1,
  SEO,
} from '@site/src/components/mk';
import { ProjectileMotionSim } from '@site/src/components/physics-simulations';
import {
  CircuitBuilderSim,
  ReactionRateSim,
  VirtualGallerySim,
  MapExplorerSim,
} from '@site/src/components/digital-simulations';

export default {
  ...MDXComponents,
  Video,
  LoopingVideo,
  FloatingVideo,
  InlineVideo,
  InlineFloatingVideo,
  EmilyH1,
  SEO,
  ProjectileMotionSim,
  CircuitBuilderSim,
  ReactionRateSim,
  VirtualGallerySim,
  MapExplorerSim,
};
