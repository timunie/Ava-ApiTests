import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetWindowsZOrder Method


Fills zOrder with numbers that represent the relative order of the windows in the z-order. The topmost window should have the highest number. Both the windows and zOrder lists are expected to be the same length.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void GetWindowsZOrder(
	Span<Window> windows,
	Span<long> zOrder
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub GetWindowsZOrder ( 
	windows As Span(Of Window),
	zOrder As Span(Of Long)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetWindowsZOrder : 
        windows : Span<Window> * 
        zOrder : Span<int64> -> unit 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.span-1" target="_blank" rel="noopener noreferrer">Span</a>(<a href="T_Avalonia_Controls_Window">Window</a>)</dt><dd>A span of windows to get their z-order</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.span-1" target="_blank" rel="noopener noreferrer">Span</a>(<a href="https://learn.microsoft.com/dotnet/api/system.int64" target="_blank" rel="noopener noreferrer">Int64</a>)</dt><dd>Span to be filled with associated window z-order</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
