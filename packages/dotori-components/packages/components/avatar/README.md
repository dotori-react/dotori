# Avatar

The `Avatar` component displays a user avatar, which can be either an image or a placeholder with the user's initials. The `AvatarGroup` component is used to group multiple avatars together, with options to control the layout direction.

## Avatar Component

### Features

- **Image or Text Placeholder**: The `Avatar` component can display either an image (if `src` is provided) or a text placeholder (using the `alt` prop).
- **Sizes**: The avatar can be rendered in different sizes (`xs`, `sm`, `md`, `lg`, `xl`).
- **Context-Aware**: The `Avatar` component can be used within an `AvatarGroup` to automatically apply group-specific styles.

### Props

#### AvatarProps

- **alt**: A string used as the alt text for the image or as the text placeholder when no image is provided.
- **src**: A string representing the image source URL. If not provided, the `alt` text will be displayed instead.
- **size**: Sets the size of the avatar. One of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. Default is `'sm'`.
- **className**: Additional class names can be passed to further customize the avatar's styling.

### Example

```typescript
// Example 1: Avatar with an image
<Avatar alt="User" src="path/to/image.jpg" size="md" />

// Example 2: Avatar with text placeholder
<Avatar alt="U" size="sm" />

// Example 3: Avatar with custom class names
<Avatar alt="User" src="path/to/image.jpg" className="custom-class" />
```

## AvatarGroup Component

### Features

- **Direction Control**: The `AvatarGroup` component allows you to arrange avatars in different directions (`row`, `col`, `reverseRow`, `reverseCol`).
- **Overlap Handling**: When avatars are grouped, they can overlap each other in a customizable manner based on the `direction` prop.
  Props

### AvatarGroupProps

- **children**: The avatars to be grouped together. This should be a collection of `Avatar` components.
- **direction**: Controls the layout direction of the avatars. One of `'col' | 'row' | 'reverseRow' | 'reverseCol'`. Default is `'row'`.

### Example

```typescript
const AvatarGroupExample = () => (
  <Avatar.Group direction="row">
    <Avatar alt="A" size="sm" />
    <Avatar alt="B" size="sm" />
    <Avatar alt="C" size="sm" />
  </Avatar.Group>
);

export default AvatarGroupExample;
```

## Default Variants

### Avatar

- **size**: `'sm'`

### AvatarGroup

- **direction**: `'row'`

## Notes

- The `Avatar` component can be used independently or within an `AvatarGroup`. When used in a group, the avatars will automatically apply styles to manage spacing and overlap.
- The `AvatarGroup` component leverages the `AvatarGroupProvider` context to pass down direction-specific styles to each `Avatar` component.
- Both components use the `cn` function from `dotori-utils` to manage conditional styling based on the provided props.
