# ResolveColorType Method


Resolve given format to Skia color type.



## Definition
**Namespace:** <a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers</a>  
**Assembly:** Avalonia.Skia (in Avalonia.Skia.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static SKColorType ResolveColorType(
	PixelFormat? format
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ResolveColorType ( 
	format As PixelFormat?
) As SKColorType
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ResolveColorType : 
        format : Nullable<PixelFormat> -> SKColorType 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Skia/Avalonia.Skia/Helpers/PixelFormatHelper.cs#L19" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.nullable-1" target="_blank" rel="noopener noreferrer">Nullable</a>(<a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a>)</dt><dd>Format to resolve.</dd></dl>

#### Return Value
SKColorType  
Resolved color type.

## See Also


#### Reference
<a href="T_Avalonia_Skia_Helpers_PixelFormatHelper">PixelFormatHelper Class</a>  
<a href="N_Avalonia_Skia_Helpers">Avalonia.Skia.Helpers Namespace</a>  

