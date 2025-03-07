# GetInstalledFontFamilyNames Method


Get all installed fonts in the system. If `true` the font collection is updated.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
string[] GetInstalledFontFamilyNames(
	bool checkForUpdates = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetInstalledFontFamilyNames ( 
	Optional checkForUpdates As Boolean = false
) As String()
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetInstalledFontFamilyNames : 
        ?checkForUpdates : bool 
(* Defaults:
        let _checkForUpdates = defaultArg checkForUpdates false
*)
-> string[] 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IFontManagerImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]

## See Also


#### Reference
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
