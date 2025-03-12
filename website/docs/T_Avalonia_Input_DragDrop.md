# DragDrop Class




## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static class DragDrop
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class DragDrop
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
[<SealedAttribute>]
type DragDrop = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/DragDrop.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DragDrop</td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Input_DragDrop_DoDragDrop">DoDragDrop(PointerEventArgs, IDataObject, DragDropEffects)</a></td>
<td>Starts a dragging operation with the given <a href="T_Avalonia_Input_IDataObject">IDataObject</a> and returns the applied drop effect from the target. </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_DragDrop_GetAllowDrop">GetAllowDrop(Interactive)</a></td>
<td>Gets a value indicating whether the given element can be used as the target of a drag-and-drop operation.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_DragDrop_SetAllowDrop">SetAllowDrop(Interactive, Boolean)</a></td>
<td>Sets a value indicating whether the given interactive can be used as the target of a drag-and-drop operation.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Input_DragDrop_AllowDropProperty">AllowDropProperty</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Input_DragDrop_DragEnterEvent">DragEnterEvent</a></td>
<td>Event which is raised, when a drag-and-drop operation enters the element.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Input_DragDrop_DragLeaveEvent">DragLeaveEvent</a></td>
<td>Event which is raised, when a drag-and-drop operation leaves the element.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Input_DragDrop_DragOverEvent">DragOverEvent</a></td>
<td>Event which is raised, when a drag-and-drop operation is updated while over the element.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Input_DragDrop_DropEvent">DropEvent</a></td>
<td>Event which is raised, when a drag-and-drop operation should complete over the element.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

