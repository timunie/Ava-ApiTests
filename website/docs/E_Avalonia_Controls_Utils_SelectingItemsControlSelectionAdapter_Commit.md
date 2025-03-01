import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Commit Event


Occurs when an item is selected and is committed to the underlying <a href="T_Avalonia_Controls_Primitives_SelectingItemsControl">SelectingItemsControl</a> control.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<RoutedEventArgs> Commit
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Commit As EventHandler(Of RoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Commit : IEvent<EventHandler<RoutedEventArgs>,
    RoutedEventArgs>
override Commit : IEvent<EventHandler<RoutedEventArgs>,
    RoutedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(RoutedEventArgs)

#### Implements
<a href="E_Avalonia_Controls_Utils_ISelectionAdapter_Commit">ISelectionAdapter.Commit</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Utils_SelectingItemsControlSelectionAdapter">SelectingItemsControlSelectionAdapter Class</a>  
<a href="N_Avalonia_Controls_Utils">Avalonia.Controls.Utils Namespace</a>  
