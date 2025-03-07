# RemoveToolTipOpeningHandler Method


Removes a handler for the <a href="F_Avalonia_Controls_ToolTip_ToolTipOpeningEvent">ToolTipOpeningEvent</a> attached event.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void RemoveToolTipOpeningHandler(
	Control element,
	EventHandler<CancelRoutedEventArgs> handler
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub RemoveToolTipOpeningHandler ( 
	element As Control,
	handler As EventHandler(Of CancelRoutedEventArgs)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member RemoveToolTipOpeningHandler : 
        element : Control * 
        handler : EventHandler<CancelRoutedEventArgs> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ToolTip.cs#L317" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_Control">Control</a></dt><dd><a href="T_Avalonia_Controls_Control">Control</a> that listens to this event.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Interactivity_CancelRoutedEventArgs">CancelRoutedEventArgs</a>)</dt><dd>Event Handler to be removed.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ToolTip">ToolTip Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
