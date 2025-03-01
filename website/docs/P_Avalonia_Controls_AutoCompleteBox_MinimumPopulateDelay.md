import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# MinimumPopulateDelay Property


Gets or sets the minimum delay, after text is typed in the text box before the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> control populates the list of possible matches in the drop-down.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TimeSpan MinimumPopulateDelay { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property MinimumPopulateDelay As TimeSpan
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member MinimumPopulateDelay : TimeSpan with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.timespan" target="_blank" rel="noopener noreferrer">TimeSpan</a>  
The minimum delay, after text is typed in the text box, but before the <a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox</a> populates the list of possible matches in the drop-down. The default is 0.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
