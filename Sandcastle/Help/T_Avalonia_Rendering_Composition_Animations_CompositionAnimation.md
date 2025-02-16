---
title:CompositionAnimation Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CompositionAnimation Class




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public abstract class CompositionAnimation : CompositionObject, 
	ICompositionAnimationBase
```
**VB**
``` VB
Public MustInherit Class CompositionAnimation
	Inherits CompositionObject
	Implements ICompositionAnimationBase
```
**F#**
``` F#
[<AbstractClassAttribute>]
type CompositionAnimation = 
    class
        inherit CompositionObject
        interface ICompositionAnimationBase
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>  →  CompositionAnimation</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Rendering_Composition_Animations_ExpressionAnimation">Avalonia.Rendering.Composition.Animations.ExpressionAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_Animations_KeyFrameAnimation">Avalonia.Rendering.Composition.Animations.KeyFrameAnimation</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Rendering_Composition_Animations_ICompositionAnimationBase">ICompositionAnimationBase</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_ImplicitAnimations">ImplicitAnimations</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_IsDisposed">IsDisposed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_Animations_CompositionAnimation_Target">Target</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_ClearAllParameters">ClearAllParameters()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_ClearParameter">ClearParameter(String)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_Dispose">Dispose()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_RegisterForSerialization">RegisterForSerialization()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetColorParameter">SetColorParameter(String, Color)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetMatrix3x2Parameter">SetMatrix3x2Parameter(String, Matrix3x2)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetMatrix4x4Parameter">SetMatrix4x4Parameter(String, Matrix4x4)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetQuaternionParameter">SetQuaternionParameter(String, Quaternion)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetReferenceParameter">SetReferenceParameter(String, CompositionObject)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetScalarParameter">SetScalarParameter(String, Single)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetVector2Parameter">SetVector2Parameter(String, Vector2)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetVector3Parameter">SetVector3Parameter(String, Vector3)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_Animations_CompositionAnimation_SetVector4Parameter">SetVector4Parameter(String, Vector4)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimation">StartAnimation(String, CompositionAnimation)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimationGroup">StartAnimationGroup(ICompositionAnimationBase)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition_Animations">Avalonia.Rendering.Composition.Animations Namespace</a>  
