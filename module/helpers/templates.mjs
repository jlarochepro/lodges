/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/lodges/templates/actor/parts/actor-artefacts.hbs",
    "systems/lodges/templates/actor/parts/actor-effects.hbs",
    "systems/lodges/templates/actor/parts/actor-features.hbs",
    "systems/lodges/templates/actor/parts/actor-items.hbs",
    "systems/lodges/templates/actor/parts/actor-lodge-details.hbs",
    "systems/lodges/templates/actor/parts/actor-spells.hbs",
  ]);
};
