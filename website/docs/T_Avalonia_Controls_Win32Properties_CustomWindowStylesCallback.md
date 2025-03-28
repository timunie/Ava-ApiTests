# Win32Properties.CustomWindowStylesCallback Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate (uint style, uint exStyle) CustomWindowStylesCallback(
	uint style,
	uint exStyle
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Function CustomWindowStylesCallback ( 
	style As UInteger,
	exStyle As UInteger
) As (style As UInteger, exStyle As UInteger)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type CustomWindowStylesCallback = 
    delegate of 
        style : uint32 * 
        exStyle : uint32 -> ValueTuple<uint32, uint32>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Win32Properties.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-2" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>, <a href="https://learn.microsoft.com/dotnet/api/system.uint32" target="_blank" rel="noopener noreferrer">UInt32</a>)

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

