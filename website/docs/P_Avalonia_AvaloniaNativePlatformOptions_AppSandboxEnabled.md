# AppSandboxEnabled Property


If you distribute your app in App Store - it should be with sandbox enabled. This parameter enables <a href="M_Avalonia_Platform_Storage_IStorageItem_SaveBookmarkAsync">SaveBookmarkAsync()</a> and related APIs, as well as wrapping all storage related calls in secure context. The default value is true.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Native (in Avalonia.Native.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool AppSandboxEnabled { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property AppSandboxEnabled As Boolean
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AppSandboxEnabled : bool with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Native/AvaloniaNativePlatformExtensions.cs#L89" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_AvaloniaNativePlatformOptions">AvaloniaNativePlatformOptions Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

