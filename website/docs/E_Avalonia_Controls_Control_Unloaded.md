import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Unloaded Event


Occurs when the control is removed from the visual tree.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<RoutedEventArgs> Unloaded
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event Unloaded As EventHandler(Of RoutedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member Unloaded : IEvent<EventHandler<RoutedEventArgs>,
    RoutedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(RoutedEventArgs)This is API symmetrical with <a href="E_Avalonia_Controls_Control_Loaded">Loaded</a> and exists for compatibility with other XAML frameworks; however, it behaves the same as OnDetachedFromVisualTree.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Control">Control Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
