# GetInstance Method


Gets the most appropriate KeyGestureFormatInfo for the IFormatProvider requested. This will be, in order: 1. The provided IFormatProvider as a KeyGestureFormatInfo 2. The currently registered platform specific KeyGestureFormatInfo, if present. 3. The Invariant otherwise.



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static KeyGestureFormatInfo GetInstance(
	IFormatProvider? formatProvider
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function GetInstance ( 
	formatProvider As IFormatProvider
) As KeyGestureFormatInfo
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member GetInstance : 
        formatProvider : IFormatProvider -> KeyGestureFormatInfo 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Platform/KeyGestureFormatInfo.cs#L62" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iformatprovider" target="_blank" rel="noopener noreferrer">IFormatProvider</a></dt><dd>The IFormatProvider to get a KeyGestureFormatInfo for.</dd></dl>

#### Return Value
<a href="T_Avalonia_Input_Platform_KeyGestureFormatInfo">KeyGestureFormatInfo</a>  


## See Also


#### Reference
<a href="T_Avalonia_Input_Platform_KeyGestureFormatInfo">KeyGestureFormatInfo Class</a>  
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  
