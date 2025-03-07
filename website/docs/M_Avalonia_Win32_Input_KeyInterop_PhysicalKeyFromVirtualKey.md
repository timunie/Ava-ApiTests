# PhysicalKeyFromVirtualKey Method


Gets a physical Avalonia key from a Windows virtual-key and key data.



## Definition
**Namespace:** <a href="N_Avalonia_Win32_Input">Avalonia.Win32.Input</a>  
**Assembly:** Avalonia.Win32 (in Avalonia.Win32.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PhysicalKey PhysicalKeyFromVirtualKey(
	int virtualKey,
	int keyData
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function PhysicalKeyFromVirtualKey ( 
	virtualKey As Integer,
	keyData As Integer
) As PhysicalKey
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member PhysicalKeyFromVirtualKey : 
        virtualKey : int * 
        keyData : int -> PhysicalKey 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Windows/Avalonia.Win32/Input/KeyInterop.cs#L476" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The Windows virtual-key.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The key data (in the same format as lParam for WM_KEYDOWN).</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_PhysicalKey">PhysicalKey</a>  
An Avalonia physical key, or <a href="T_Avalonia_Input_PhysicalKey">None</a> if none matched.

## See Also


#### Reference
<a href="T_Avalonia_Win32_Input_KeyInterop">KeyInterop Class</a>  
<a href="N_Avalonia_Win32_Input">Avalonia.Win32.Input Namespace</a>  
