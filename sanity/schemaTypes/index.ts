import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {heroType} from './heroType'
import {clientWorkType} from './clientWork'
import {projectsType} from './projectsType'
import {aboutType} from './aboutType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, heroType, clientWorkType, projectsType, aboutType],
}
