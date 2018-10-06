const Query = {
  feed: (parent, args, ctx) => ctx.db.posts({ where: { isPublished: true } }),
  drafts: (parent, args, ctx) =>
    ctx.db.posts({ where: { isPublished: false } }),
  post: (parent, args, ctx) => ctx.db.post({ id: args.id }),
    personaById: (parent, args, ctx) => ctx.db.persona({ id: args.id }),
    personaAll: (parent, args, ctx) => ctx.db.personae({ }),
}

module.exports = {
  Query,
}
