import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TextFilter Property


Gets or sets the custom method that uses the user-entered text to filter items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property in a text-based way for display in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AutoCompleteFilterPredicate<string?>? TextFilter { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property TextFilter As AutoCompleteFilterPredicate(Of String)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TextFilter : AutoCompleteFilterPredicate<string> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L436" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_AutoCompleteFilterPredicate_1">AutoCompleteFilterPredicate</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>)  
The custom method that uses the user-entered text to filter items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property in a text-based way for display in the drop-down.

## 
The search mode is automatically set to Custom if you set the TextFilter property.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
