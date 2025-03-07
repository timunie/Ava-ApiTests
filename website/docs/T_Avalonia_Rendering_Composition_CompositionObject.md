# CompositionObject Class


Base class of the composition API representing a node in the visual tree structure. Composition objects are the visual tree structure on which all other features of the composition API use and build on. The API allows developers to define and create one or many <a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a> objects each representing a single node in a Visual tree.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class CompositionObject
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class CompositionObject
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type CompositionObject = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/CompositionObject.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  CompositionObject</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimation">Avalonia.Rendering.Composition.Animations.CompositionAnimation</a><br /><a href="T_Avalonia_Rendering_Composition_Animations_CompositionAnimationGroup">Avalonia.Rendering.Composition.Animations.CompositionAnimationGroup</a><br /><a href="T_Avalonia_Rendering_Composition_Animations_ImplicitAnimationCollection">Avalonia.Rendering.Composition.Animations.ImplicitAnimationCollection</a><br /><a href="T_Avalonia_Rendering_Composition_CompositionPropertySet">Avalonia.Rendering.Composition.CompositionPropertySet</a><br /><a href="T_Avalonia_Rendering_Composition_CompositionSurface">Avalonia.Rendering.Composition.CompositionSurface</a><br /><a href="T_Avalonia_Rendering_Composition_CompositionVisual">Avalonia.Rendering.Composition.CompositionVisual</a><br /><a href="T_Avalonia_Rendering_Composition_CompositionVisualCollection">Avalonia.Rendering.Composition.CompositionVisualCollection</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td>The associated Compositor</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_ImplicitAnimations">ImplicitAnimations</a></td>
<td>The collection of implicit animations attached to this object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_IsDisposed">IsDisposed</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_Dispose">Dispose()</a></td>
<td>Releases all resources used by the CompositionObject</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_RegisterForSerialization">RegisterForSerialization()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimation">StartAnimation(String, CompositionAnimation)</a></td>
<td>Connects an animation with the specified property of the object and starts the animation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionObject_StartAnimationGroup">StartAnimationGroup(ICompositionAnimationBase)</a></td>
<td>Starts an animation group. The StartAnimationGroup method on CompositionObject lets you start CompositionAnimationGroup. All the animations in the group will be started at the same time on the object.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
