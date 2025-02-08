import { Ability, AbilityBuilder } from '@casl/ability';

export function defineAbilitiesFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === 'admin') {
    can('manage', 'all'); // Admin can manage everything
  } else if (user.role === 'editor') {
    can('read', 'Post');
    can('create', 'Post');
    can('update', 'Post', { authorId: user.id });
  } else {
    can('read', 'Post');
  }

  return build();
}