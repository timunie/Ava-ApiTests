import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FilterMode Property


Gets or sets how the text in the text box is used to filter items specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ItemsSource">ItemsSource</a> property for display in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public AutoCompleteFilterMode FilterMode { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property FilterMode As AutoCompleteFilterMode
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member FilterMode : AutoCompleteFilterMode with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/AutoCompleteBox/AutoCompleteBox.Properties.cs#L394" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_AutoCompleteFilterMode">AutoCompleteFilterMode</a>  
One of the <a href="T_Avalonia_Controls_AutoCompleteFilterMode">AutoCompleteFilterMode</a> values The default is <a href="T_Avalonia_Controls_AutoCompleteFilterMode">StartsWith</a>.

## 
Use the FilterMode property to specify how possible matches are filtered. For example, possible matches can be filtered in a predefined or custom way. The search mode is automatically set to Custom if you set the ItemFilter property.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>The specified value is not a valid <a href="T_Avalonia_Controls_AutoCompleteFilterMode">AutoCompleteFilterMode</a>.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
