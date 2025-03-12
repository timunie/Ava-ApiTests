# Collapsing Event


Occurs as the content area is closing.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<CancelRoutedEventArgs> Collapsing
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Collapsing As EventHandler(Of CancelRoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Collapsing : IEvent<EventHandler<CancelRoutedEventArgs>,
    CancelRoutedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Expander.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Interactivity_CancelRoutedEventArgs">CancelRoutedEventArgs</a>)The event args <a href="P_Avalonia_Interactivity_CancelRoutedEventArgs_Cancel">Cancel</a> property may be set to true to cancel the event and keep the control open (expanded).

## See Also


#### Reference
<a href="T_Avalonia_Controls_Expander">Expander Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

