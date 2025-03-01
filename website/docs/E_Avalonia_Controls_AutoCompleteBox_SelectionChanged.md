import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SelectionChanged Event


Occurs when the selected item in the drop-down portion of the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> has changed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<SelectionChangedEventArgs> SelectionChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event SelectionChanged As EventHandler(Of SelectionChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member SelectionChanged : IEvent<EventHandler<SelectionChangedEventArgs>,
    SelectionChangedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_SelectionChangedEventArgs">SelectionChangedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
