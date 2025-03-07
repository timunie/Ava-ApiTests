# ConverterCulture Property


Gets or sets the culture in which to evaluate the converter.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[TypeConverterAttribute(typeof(CultureInfoIetfLanguageTagConverter))]
public CultureInfo? ConverterCulture \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<TypeConverterAttribute(GetType(CultureInfoIetfLanguageTagConverter))>
Public Property ConverterCulture As CultureInfo
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<TypeConverterAttribute(typeof(CultureInfoIetfLanguageTagConverter))>]
member ConverterCulture : CultureInfo with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/TemplateBinding.cs#L50" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a>  
The default value is null.If this property is not set then <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo.currentculture" target="_blank" rel="noopener noreferrer">CurrentCulture</a> will be used.

## See Also


#### Reference
<a href="T_Avalonia_Data_TemplateBinding">TemplateBinding Class</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
