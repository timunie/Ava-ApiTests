import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FormatValue Method


Converts the specified object to a string by using the Converter and ConverterCulture values of the binding object specified by the <a href="P_Avalonia_Controls_AutoCompleteBox_ValueMemberBinding">ValueMemberBinding</a> property.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual string? FormatValue(
	Object? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function FormatValue ( 
	value As Object
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract FormatValue : 
        value : Object -> string 
override FormatValue : 
        value : Object -> string 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The object to format as a string.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The string representation of the specified object.Override this method to provide a custom string conversion.

## See Also


#### Reference
<a href="T_Avalonia_Controls_AutoCompleteBox">AutoCompleteBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
