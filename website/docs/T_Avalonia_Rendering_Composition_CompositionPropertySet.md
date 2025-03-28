# CompositionPropertySet Class


CompositionPropertySets are <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>s that allow storage of key values pairs that can be shared across the application and are not tied to the lifetime of another composition object. CompositionPropertySets are most commonly used with animations, where they maintain key-value pairs that are referenced to drive portions of composition animations. CompositionPropertySets provide the ability to insert key-value pairs or retrieve a value for a given key. CompositionPropertySet does not support a delete function – ensure you use CompositionPropertySet to store values that will be shared across the application.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class CompositionPropertySet : CompositionObject
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class CompositionPropertySet
	Inherits CompositionObject
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type CompositionPropertySet = 
    class
        inherit CompositionObject
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionPropertySet.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>  →  CompositionPropertySet</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td>The associated Compositor<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_ImplicitAnimations">ImplicitAnimations</a></td>
<td>The collection of implicit animations attached to this object.<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_IsDisposed">IsDisposed</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
</table>

## Methods
<table>
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
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertBoolean">InsertBoolean(String, Boolean)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertColor">InsertColor(String, Color)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertMatrix3x2">InsertMatrix3x2(String, Matrix3x2)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertMatrix4x4">InsertMatrix4x4(String, Matrix4x4)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertQuaternion">InsertQuaternion(String, Quaternion)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertScalar">InsertScalar(String, Single)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertVector2">InsertVector2(String, Vector2)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertVector3">InsertVector3(String, Vector3)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_InsertVector4">InsertVector4(String, Vector4)</a></td>
<td> </td>
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
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetBoolean">TryGetBoolean(String, Boolean)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetColor">TryGetColor(String, Color)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetMatrix3x2">TryGetMatrix3x2(String, Matrix3x2)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetMatrix4x4">TryGetMatrix4x4(String, Matrix4x4)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetQuaternion">TryGetQuaternion(String, Quaternion)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetScalar">TryGetScalar(String, Single)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetVector2">TryGetVector2(String, Vector2)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetVector3">TryGetVector3(String, Vector3)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionPropertySet_TryGetVector4">TryGetVector4(String, Vector4)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

