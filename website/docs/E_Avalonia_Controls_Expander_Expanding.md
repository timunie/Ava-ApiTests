import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Expanding Event


Occurs as the content area is opening.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<CancelRoutedEventArgs> Expanding
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Expanding As EventHandler(Of CancelRoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Expanding : IEvent<EventHandler<CancelRoutedEventArgs>,
    CancelRoutedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(CancelRoutedEventArgs)The event args Cancel property may be set to true to cancel the event and keep the control closed (collapsed).

## See Also


#### Reference
<a href="T_Avalonia_Controls_Expander">Expander Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
