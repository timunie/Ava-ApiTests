# KeyFrameAnimation Class


A time-based animation with one or more key frames. These frames are markers, allowing developers to specify values at specific times for the animating property. KeyFrame animations can be further customized by specifying how the animation interpolates between keyframes.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class KeyFrameAnimation : CompositionAnimation
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class KeyFrameAnimation
	Inherits CompositionAnimation
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type KeyFrameAnimation = 
    class
        inherit CompositionAnimation
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/Animations/KeyFrameAnimation.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>  →  <a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">CompositionAnimation</a>  →  KeyFrameAnimation</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Rendering_Composition_BooleanKeyFrameAnimation">Avalonia.Rendering.Composition.BooleanKeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_ColorKeyFrameAnimation">Avalonia.Rendering.Composition.ColorKeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_DoubleKeyFrameAnimation">Avalonia.Rendering.Composition.DoubleKeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_QuaternionKeyFrameAnimation">Avalonia.Rendering.Composition.QuaternionKeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_ScalarKeyFrameAnimation">Avalonia.Rendering.Composition.ScalarKeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_Vector2KeyFrameAnimation">Avalonia.Rendering.Composition.Vector2KeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_Vector3DKeyFrameAnimation">Avalonia.Rendering.Composition.Vector3DKeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_Vector3KeyFrameAnimation">Avalonia.Rendering.Composition.Vector3KeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_Vector4KeyFrameAnimation">Avalonia.Rendering.Composition.Vector4KeyFrameAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_VectorKeyFrameAnimation">Avalonia.Rendering.Composition.VectorKeyFrameAnimation</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td>The associated Compositor<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_DelayBehavior">DelayBehavior</a></td>
<td>The delay behavior of the key frame animation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_DelayTime">DelayTime</a></td>
<td>Delay before the animation starts after <a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimation">StartAnimation(String, CompositionAnimation)</a> is called.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_Direction">Direction</a></td>
<td>The direction the animation is playing. The Direction property allows you to drive your animation from start to end or end to start or alternate between start and end or end to start if animation has an <a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_IterationCount">IterationCount</a> greater than one. This gives an easy way for customizing animation definitions.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_Duration">Duration</a></td>
<td>The duration of the animation. Minimum allowed value is 1ms and maximum allowed value is 24 days.</td>
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
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_IterationBehavior">IterationBehavior</a></td>
<td>The iteration behavior for the key frame animation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_IterationCount">IterationCount</a></td>
<td>The number of times to repeat the key frame animation.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_StopBehavior">StopBehavior</a></td>
<td>Specifies how to set the property value when animation is stopped</td>
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
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_Dispose">Dispose()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation_InsertExpressionKeyFrame">InsertExpressionKeyFrame(Single, String, Easing)</a></td>
<td>Inserts an expression keyframe.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_RegisterForSerialization">RegisterForSerialization()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
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

