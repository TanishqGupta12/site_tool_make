// utils/abilities.ts
import { AbilityBuilder, Ability } from '@casl/ability';

export default function defineAbilitiesFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);
  
  if (user.roleId == '1') {
    can('manage', 'all'); 
  } else if (user.role == '2') {
    can('read', 'Post');
    can('create', 'Post');
    can('update', 'Post', { authorId: user.id });
  } else {
    can('read', 'Post');
  }

  return build();
}