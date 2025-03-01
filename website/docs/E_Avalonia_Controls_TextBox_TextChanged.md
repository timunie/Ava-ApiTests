import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TextChanged Event


Occurs asynchronously after text changes and the new text is rendered.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public event EventHandler<TextChangedEventArgs> TextChanged
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Event TextChanged As EventHandler(Of TextChangedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TextChanged : IEvent<EventHandler<TextChangedEventArgs>,
    TextChangedEventArgs>
```
</TabItem>
</Tabs>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_Controls_TextChangedEventArgs">TextChangedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBox">TextBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
