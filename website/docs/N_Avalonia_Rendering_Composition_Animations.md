# Avalonia.Rendering.Composition.Animations Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a></td>
<td>This is the base class for ExpressionAnimation and KeyFrameAnimation.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimationGroup">CompositionAnimationGroup</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_ExpressionAnimation">ExpressionAnimation</a></td>
<td>A Composition Animation that uses a mathematical equation to calculate the value for an animating property every frame.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection">ImplicitAnimationCollection</a></td>
<td>A collection of animations triggered when a condition is met.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation">KeyFrameAnimation</a></td>
<td>A time-based animation with one or more key frames. These frames are markers, allowing developers to specify values at specific times for the animating property. KeyFrame animations can be further customized by specifying how the animation interpolates between keyframes.</td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_ICompositionAnimationBase">ICompositionAnimationBase</a></td>
<td>Base class for composition animations.</td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_AnimationDelayBehavior">AnimationDelayBehavior</a></td>
<td>Specifies the animation delay behavior.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_AnimationIterationBehavior">AnimationIterationBehavior</a></td>
<td>Specifies if the animation should loop.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Rendering_Composition_Animations_AnimationStopBehavior">AnimationStopBehavior</a></td>
<td>Specifies the behavior of an animation when it stops.</td>
</tr>
</table>