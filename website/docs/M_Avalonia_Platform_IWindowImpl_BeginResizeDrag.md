# BeginResizeDrag Method


Starts resizing a window. This function is used if an application has window resizing controls. Should be called from left mouse button press event handler



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void BeginResizeDrag(
	WindowEdge edge,
	PointerPressedEventArgs e
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub BeginResizeDrag ( 
	edge As WindowEdge,
	e As PointerPressedEventArgs
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract BeginResizeDrag : 
        edge : WindowEdge * 
        e : PointerPressedEventArgs -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/IWindowImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_WindowEdge">WindowEdge</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Input_PointerPressedEventArgs">PointerPressedEventArgs</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
