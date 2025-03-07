# IPlatformRenderInterfaceContext Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPlatformRenderInterfaceContext : IOptionalFeatureProvider, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPlatformRenderInterfaceContext
	Inherits IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPlatformRenderInterfaceContext = 
    interface
        interface IOptionalFeatureProvider
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformRenderInterfaceContext_IsLost">IsLost</a></td>
<td>Indicates that the context is no longer usable. This method should be thread-safe</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformRenderInterfaceContext_PublicFeatures">PublicFeatures</a></td>
<td>Exposes features that should be available for consumption while context isn't active (e. g. from the UI thread)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterfaceContext_CreateOffscreenRenderTarget">CreateOffscreenRenderTarget(PixelSize, Double)</a></td>
<td>Creates an offscreen render target</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformRenderInterfaceContext_CreateRenderTarget">CreateRenderTarget(IEnumerable(Object))</a></td>
<td>Creates a renderer.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IOptionalFeatureProvider_TryGetFeature">TryGetFeature(Type)</a></td>
<td>Queries for an optional feature.<br />(Inherited from <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>)</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1_1">TryGetFeature(T)()</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_OptionalFeatureProviderExtensions_TryGetFeature__1">TryGetFeature(T)(T)</a></td>
<td>Queries for an optional feature.<br />(Defined by <a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
