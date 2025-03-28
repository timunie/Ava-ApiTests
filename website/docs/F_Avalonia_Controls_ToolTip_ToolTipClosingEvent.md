# ToolTipClosingEvent Field


The event raised when a ToolTip on an element that was shown should now be hidden.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly RoutedEvent ToolTipClosingEvent
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly ToolTipClosingEvent As RoutedEvent
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val ToolTipClosingEvent: RoutedEvent
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ToolTip.cs" title="View the source code">View Source</a>



#### Field Value
<a href="T_Avalonia_Interactivity_RoutedEvent">RoutedEvent</a>

## Remarks
Marking the ToolTipClosing event as handled does not cancel closing the tooltip. Once the tooltip is displayed, closing the tooltip is done only in response to user interaction with the UI.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ToolTip">ToolTip Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

