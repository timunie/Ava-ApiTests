# SupportsIndividualRoundRects Property


Gets a value indicating whether the platform directly supports rectangles with rounded corners.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool SupportsIndividualRoundRects \{ get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property SupportsIndividualRoundRects As Boolean
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract SupportsIndividualRoundRects : bool with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformRenderInterface.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>Some platform renderers can't directly handle rounded corners on rectangles. In this case, code that requires rounded corners must generate and retain a geometry instead.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
