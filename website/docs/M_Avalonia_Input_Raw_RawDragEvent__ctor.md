# RawDragEvent Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_Raw_RawDragEvent">RawDragEvent</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public RawDragEvent(
	IDragDropDevice inputDevice,
	RawDragEventType type,
	IInputRoot root,
	Point location,
	IDataObject data,
	DragDropEffects effects,
	RawInputModifiers modifiers
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	inputDevice As IDragDropDevice,
	type As RawDragEventType,
	root As IInputRoot,
	location As Point,
	data As IDataObject,
	effects As DragDropEffects,
	modifiers As RawInputModifiers
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        inputDevice : IDragDropDevice * 
        type : RawDragEventType * 
        root : IInputRoot * 
        location : Point * 
        data : IDataObject * 
        effects : DragDropEffects * 
        modifiers : RawInputModifiers -> RawDragEvent
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawDragEvent.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Raw_IDragDropDevice">IDragDropDevice</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_Raw_RawDragEventType">RawDragEventType</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IInputRoot">IInputRoot</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_DragDropEffects">DragDropEffects</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_RawInputModifiers">RawInputModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawDragEvent">RawDragEvent Class</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
