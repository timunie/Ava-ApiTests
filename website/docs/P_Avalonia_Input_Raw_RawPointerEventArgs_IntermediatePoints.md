# IntermediatePoints Property


Points that were traversed by a pointer since the previous relevant event, only valid for Move and TouchUpdate



## Definition
**Namespace:** <a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Lazy<IReadOnlyList<RawPointerPoint>?>? IntermediatePoints \{ get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property IntermediatePoints As Lazy(Of IReadOnlyList(Of RawPointerPoint))
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member IntermediatePoints : Lazy<IReadOnlyList<RawPointerPoint>> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Raw/RawPointerEventArgs.cs#L124" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.lazy-1" target="_blank" rel="noopener noreferrer">Lazy</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Input_Raw_RawPointerPoint">RawPointerPoint</a>))

## See Also


#### Reference
<a href="T_Avalonia_Input_Raw_RawPointerEventArgs">RawPointerEventArgs Class</a>  
<a href="N_Avalonia_Input_Raw">Avalonia.Input.Raw Namespace</a>  
