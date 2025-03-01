import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SetValue Method


Sets the value of a control.



## Definition
**Namespace:** <a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void SetValue(
	string? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub SetValue ( 
	value As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SetValue : 
        value : string -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The value to set. The provider is responsible for converting the value to the appropriate data type.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Automation_Provider_IValueProvider">IValueProvider Interface</a>  
<a href="N_Avalonia_Automation_Provider">Avalonia.Automation.Provider Namespace</a>  
