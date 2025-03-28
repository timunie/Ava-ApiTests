# CompositionVisualCollection Class


A collection of CompositionVisual objects



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class CompositionVisualCollection : CompositionObject, 
	IList<CompositionVisual>, ICollection<CompositionVisual>, IEnumerable<CompositionVisual>, 
	IEnumerable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class CompositionVisualCollection
	Inherits CompositionObject
	Implements IList(Of CompositionVisual), ICollection(Of CompositionVisual), 
	IEnumerable(Of CompositionVisual), IEnumerable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CompositionVisualCollection = 
    class
        inherit CompositionObject
        interface IList<CompositionVisual>
        interface ICollection<CompositionVisual>
        interface IEnumerable<CompositionVisual>
        interface IEnumerable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/Composition/VisualCollection.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>  →  CompositionVisualCollection</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1" target="_blank" rel="noopener noreferrer">ICollection</a>(<a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(<a href="T_Avalonia_Rendering_Composition_CompositionVisual">CompositionVisual</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionObject_Compositor">Compositor</a></td>
<td>The associated Compositor<br />(Inherited from <a href="T_Avalonia_Rendering_Composition_CompositionObject">CompositionObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionVisualCollection_Count">Count</a></td>
<td> </td>
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
<td><a href="P_Avalonia_Rendering_Composition_CompositionVisualCollection_IsReadOnly">IsReadOnly</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_CompositionVisualCollection_Item">Item(Int32)</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_Add">Add(CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_Clear">Clear()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_Contains">Contains(CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_CopyTo">CopyTo(CompositionVisual[], Int32)</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_GetEnumerator">GetEnumerator()</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_IndexOf">IndexOf(CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_Insert">Insert(Int32, CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_InsertAbove">InsertAbove(CompositionVisual, CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_InsertAtBottom">InsertAtBottom(CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_InsertAtTop">InsertAtTop(CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_InsertBelow">InsertBelow(CompositionVisual, CompositionVisual)</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_Remove">Remove(CompositionVisual)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_RemoveAll">RemoveAll()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_Composition_CompositionVisualCollection_RemoveAt">RemoveAt(Int32)</a></td>
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
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  

