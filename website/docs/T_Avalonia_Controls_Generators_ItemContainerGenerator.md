# ItemContainerGenerator Class


Generates containers for an <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class ItemContainerGenerator
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class ItemContainerGenerator
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ItemContainerGenerator = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Generators/ItemContainerGenerator.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ItemContainerGenerator</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Controls_Generators_TreeItemContainerGenerator">Avalonia.Controls.Generators.TreeItemContainerGenerator</a></td></tr>
</table>



## Remarks
When creating a container for an item from a <a href="T_Avalonia_Controls_VirtualizingPanel">VirtualizingPanel</a>, the following process should be followed: - <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> should first be called to determine whether the item needs a container. This method will return true if the item should be wrapped in a container control, or false if the item itself can be used as a container. - If <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> returns true then the <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_CreateContainer">CreateContainer(Object, Int32, Object)</a> method should be called to create a new container, passing the recycle key returned from <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a>. - If the panel supports recycling and the recycle key is non-null then the recycle key should be recorded for the container (e.g. in an attached property or the realized container list). - <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a> method should be called for the container. - The container should then be added to the panel using <a href="M_Avalonia_Controls_VirtualizingPanel_AddInternalChild">AddInternalChild(Control)</a> - Finally, <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_ItemContainerPrepared">ItemContainerPrepared(Control, Object, Int32)</a> should be called. NOTE: If <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> in the first step above returns false then the above steps should be carried out a single time: the first time the item is displayed. Otherwise the steps should be carried out each time a new container is realized for an item. When unrealizing a container, the following process should be followed: - If <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> for the item returned false then the item cannot be unrealized or recycled. - Otherwise, <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_ClearItemContainer">ClearItemContainer(Control)</a> should be called for the container - If recycling is supported by the panel and the container then the container should be added to a recycle pool keyed on the recycle key returned from <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a>. It is assumed that recycled containers will not be removed from the panel but instead hidden from view using e.g. `container.IsVisible = false`. - If recycling is not supported then the container should be removed from the panel. When recycling an unrealized container, the following process should be followed: - <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a> should be called to determine whether the item needs a container, and if so, the recycle key. - A container should be taken from the recycle pool keyed on the returned recycle key. - The container should be made visible. - <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a> method should be called for the container. - <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_ItemContainerPrepared">ItemContainerPrepared(Control, Object, Int32)</a> should be called. NOTE: Although this class is similar to that found in WPF/UWP, in Avalonia this class only concerns itself with generating and clearing item containers; it does not maintain a record of the currently realized containers, that responsibility is delegated to the items panel.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_ClearItemContainer">ClearItemContainer(Control)</a></td>
<td>Undoes the effects of the <a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a> method.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_CreateContainer">CreateContainer(Object, Int32, Object)</a></td>
<td>Creates a new container control.</td>
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
<td><a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_ItemContainerIndexChanged">ItemContainerIndexChanged(Control, Int32, Int32)</a></td>
<td>Called when the index for a container changes due to an insertion or removal in the items collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_ItemContainerPrepared">ItemContainerPrepared(Control, Object, Int32)</a></td>
<td>Notifies the <a href="T_Avalonia_Controls_ItemsControl">ItemsControl</a> that a container has been fully prepared to display an item.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_NeedsContainer">NeedsContainer(Object, Int32, Object)</a></td>
<td>Determines whether the specified item needs to be wrapped in a container control.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Generators_ItemContainerGenerator_PrepareItemContainer">PrepareItemContainer(Control, Object, Int32)</a></td>
<td>Prepares the specified element as the container for the corresponding item.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Generators">Avalonia.Controls.Generators Namespace</a>  

