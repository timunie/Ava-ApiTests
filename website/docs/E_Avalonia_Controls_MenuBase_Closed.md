import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Closed Event


Occurs when a <a href="T_Avalonia_Controls_Menu">Menu</a> is closed.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<RoutedEventArgs> Closed
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Closed As EventHandler(Of RoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Closed : IEvent<EventHandler<RoutedEventArgs>,
    RoutedEventArgs>
override Closed : IEvent<EventHandler<RoutedEventArgs>,
    RoutedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(RoutedEventArgs)

## See Also


#### Reference
<a href="T_Avalonia_Controls_MenuBase">MenuBase Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
