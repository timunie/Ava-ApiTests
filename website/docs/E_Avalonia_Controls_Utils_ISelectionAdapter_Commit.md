import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Commit Event


Occurs when a selected item is not cancelled and is committed as the selected item.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event EventHandler<RoutedEventArgs> Commit
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event Commit As EventHandler(Of RoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Commit : IEvent<EventHandler<RoutedEventArgs>,
    RoutedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(RoutedEventArgs)

## See Also


#### Reference
<a href="T_Avalonia_Controls_Utils_ISelectionAdapter">ISelectionAdapter Interface</a>  
<a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils Namespace</a>  
