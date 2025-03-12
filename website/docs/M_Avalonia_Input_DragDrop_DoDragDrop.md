# DoDragDrop Method


Starts a dragging operation with the given <a href="T_Avalonia_Input_IDataObject">IDataObject</a> and returns the applied drop effect from the target. 



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Task<DragDropEffects> DoDragDrop(
	PointerEventArgs triggerEvent,
	IDataObject data,
	DragDropEffects allowedEffects
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function DoDragDrop ( 
	triggerEvent As PointerEventArgs,
	data As IDataObject,
	allowedEffects As DragDropEffects
) As Task(Of DragDropEffects)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member DoDragDrop : 
        triggerEvent : PointerEventArgs * 
        data : IDataObject * 
        allowedEffects : DragDropEffects -> Task<DragDropEffects> 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/DragDrop.cs#L50" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_PointerEventArgs">PointerEventArgs</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_DragDropEffects">DragDropEffects</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="T_Avalonia_Input_DragDropEffects">DragDropEffects</a>)

## See Also


#### Reference
<a href="T_Avalonia_Input_DragDrop">DragDrop Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  
<a href="T_Avalonia_Input_DataObject">DataObject</a>  

