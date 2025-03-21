# FormatKey Method


Checks the platformKeyOverrides and s_commonKeyOverrides Dictionaries, in order, for the appropriate string to represent the given Key on this platform. NOTE: If platformKeyOverrides is null, this is assumed to be the Invariant and the Dictionaries are not checked. The plain Enum string is returned instead.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string FormatKey(
	Key key
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function FormatKey ( 
	key As Key
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member FormatKey : 
        key : Key -> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Platform/KeyGestureFormatInfo.cs#L122" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Input_Key">Key</a></dt><dd>The Key to format.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The appropriate platform specific or common override if present, key.ToString() if not or this is the Invariant.

## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_KeyGestureFormatInfo">KeyGestureFormatInfo Class</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  

