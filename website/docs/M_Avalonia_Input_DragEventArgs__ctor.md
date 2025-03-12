# DragEventArgs Constructor


Initializes a new instance of the <a href="T_Avalonia_Input_DragEventArgs">DragEventArgs</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using DragDrop.DoDragDrop or IHeadlessWindow.DragDrop.")]
public DragEventArgs(
	RoutedEvent<DragEventArgs> routedEvent,
	IDataObject data,
	Interactive target,
	Point targetLocation,
	KeyModifiers keyModifiers
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using DragDrop.DoDragDrop or IHeadlessWindow.DragDrop.")>
Public Sub New ( 
	routedEvent As RoutedEvent(Of DragEventArgs),
	data As IDataObject,
	target As Interactive,
	targetLocation As Point,
	keyModifiers As KeyModifiers
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute("This constructor might be removed in 12.0. For unit testing, consider using DragDrop.DoDragDrop or IHeadlessWindow.DragDrop.")>]
new : 
        routedEvent : RoutedEvent<DragEventArgs> * 
        data : IDataObject * 
        target : Interactive * 
        targetLocation : Point * 
        keyModifiers : KeyModifiers -> DragEventArgs
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/DragEventArgs.cs#L30" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(<a href="T_Avalonia_Input_DragEventArgs">DragEventArgs</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Input_IDataObject">IDataObject</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Interactivity_Interactive">Interactive</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_KeyModifiers">KeyModifiers</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Input_DragEventArgs">DragEventArgs Class</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

