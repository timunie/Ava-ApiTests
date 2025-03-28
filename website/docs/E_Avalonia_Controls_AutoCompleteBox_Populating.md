# Populating Event


Occurs when the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> is populating the drop-down with possible matches based on the <a href="P_Avalonia_Controls_AutoCompleteBox_Text">Text</a> property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<PopulatingEventArgs> Populating
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Populating As EventHandler(Of PopulatingEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Populating : IEvent<EventHandler<PopulatingEventArgs>,
    PopulatingEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/AutoCompleteBox/AutoCompleteBox.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_PopulatingEventArgs">PopulatingEventArgs</a>)

## Remarks
If the event is canceled, by setting the PopulatingEventArgs.Cancel property to true, the AutoCompleteBox will not automatically populate the selection adapter contained in the drop-down. In this case, if you want possible matches to appear, you must provide the logic for populating the selection adapter.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

