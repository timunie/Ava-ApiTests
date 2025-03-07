# ExpressionAnimation Class


A Composition Animation that uses a mathematical equation to calculate the value for an animating property every frame.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class ExpressionAnimation : CompositionAnimation
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ExpressionAnimation
	Inherits CompositionAnimation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ExpressionAnimation = 
    class
        inherit CompositionAnimation
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Animations/ExpressionAnimation.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>  →  <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>  →  ExpressionAnimation</td></tr>
</table>

The core of ExpressionAnimations allows a developer to define a mathematical equation that can be used to calculate the value of a targeted animating property each frame. This contrasts <a href="T_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation">KeyFrameAnimation</a>s, which use an interpolator to define how the animating property changes over time. The mathematical equation can be defined using references to properties of Composition objects, mathematical functions and operators and Input. Use the <a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimation">StartAnimation(String, CompositionAnimation)</a> method to start the animation.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td>The associated Compositor<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_ExpressionAnimation_Expression">Expression</a></td>
<td>The mathematical equation specifying how the animated value is calculated each frame. The Expression is the core of an ExpressionAnimation and represents the equation the system will use to calculate the value of the animation property each frame. The equation is set on this property in the form of a string. Although expressions can be defined by simple mathematical equations such as "2+2", the real power lies in creating mathematical relationships where the input values can change frame over frame.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_ImplicitAnimations">ImplicitAnimations</a></td>
<td>The collection of implicit animations attached to this object.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_IsDisposed">IsDisposed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_CompositionAnimation_Target">Target</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_ClearAllParameters">ClearAllParameters()</a></td>
<td>Clears all of the parameters of the animation.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_ClearParameter">ClearParameter(String)</a></td>
<td>Clears a parameter from the animation.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetColorParameter">SetColorParameter(String, Color)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetMatrix3x2Parameter">SetMatrix3x2Parameter(String, Matrix3x2)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetMatrix4x4Parameter">SetMatrix4x4Parameter(String, Matrix4x4)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetQuaternionParameter">SetQuaternionParameter(String, Quaternion)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetReferenceParameter">SetReferenceParameter(String, CompositionObject)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetScalarParameter">SetScalarParameter(String, Single)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetVector2Parameter">SetVector2Parameter(String, Vector2)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetVector3Parameter">SetVector3Parameter(String, Vector3)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetVector4Parameter">SetVector4Parameter(String, Vector4)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimation">StartAnimation(String, CompositionAnimation)</a></td>
<td>Connects an animation with the specified property of the object and starts the animation.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimationGroup">StartAnimationGroup(ICompositionAnimationBase)</a></td>
<td>Starts an animation group. The StartAnimationGroup method on CompositionObject lets you start CompositionAnimationGroup. All the animations in the group will be started at the same time on the object.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  
