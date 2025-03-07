# ToolTipOpeningEvent Field


The event raised when a ToolTip is going to be shown on an element.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly RoutedEvent<CancelRoutedEventArgs> ToolTipOpeningEvent
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ToolTipOpeningEvent As RoutedEvent(Of CancelRoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ToolTipOpeningEvent: RoutedEvent<CancelRoutedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ToolTip.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_Interactivity_RoutedEvent_1">RoutedEvent</a>(<a href="T_Avalonia_Interactivity_CancelRoutedEventArgs">CancelRoutedEventArgs</a>)To prevent a tooltip from appearing in the UI, your handler for ToolTipOpening can mark the event data handled. Otherwise, the tooltip is displayed, using the value of the ToolTip property as the tooltip content. Another possible scenario is that you could write a handler that resets the value of the ToolTip property for the element that is the event source, just before the tooltip is displayed. ToolTipOpening will not be raised if the value of ToolTip is null or otherwise unset. Do not deliberately set ToolTip to null while a tooltip is open or opening; this will not have the effect of closing the tooltip, and will instead create an undesirable visual artifact in the UI.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ToolTip">ToolTip Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
